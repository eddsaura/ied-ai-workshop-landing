import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Combine two 2x2 to get 4x4
float bayer4x4(vec2 pos) {
    vec2 p1 = mod(pos, 2.0);
    vec2 p2 = mod(floor(pos / 2.0), 2.0);
    
    float d1 = (p1.x == 0.0 && p1.y == 0.0) ? 0.0 :
               (p1.x == 1.0 && p1.y == 0.0) ? 2.0 :
               (p1.x == 0.0 && p1.y == 1.0) ? 3.0 : 1.0;
               
    float d2 = (p2.x == 0.0 && p2.y == 0.0) ? 0.0 :
               (p2.x == 1.0 && p2.y == 0.0) ? 2.0 :
               (p2.x == 0.0 && p2.y == 1.0) ? 3.0 : 1.0;
               
    return (d1 + d2 * 4.0) / 16.0;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = uv;
    st.x *= u_resolution.x / u_resolution.y;

    vec2 pos = vec2(st * 1.5);
    pos.y -= u_time * 0.15;
    pos.x += sin(u_time * 0.1) * 0.2;

    float n = noise(pos) * 0.5 + noise(pos * 2.5) * 0.25 + noise(pos * 5.0) * 0.125;
    
    // Create animated organic shapes
    n += 0.1 * sin(u_time * 0.5 + uv.x * 5.0);
    n += 0.1 * cos(u_time * 0.3 + uv.y * 5.0);

    // Apply dither
    float b = bayer4x4(gl_FragCoord.xy);
    float ditherMap = n + 0.2; // Shift up base noise
    float dithered = step(b, ditherMap * 0.7);

    vec3 colorDark = vec3(10.0/255.0, 10.0/255.0, 10.0/255.0); // --dark
    vec3 colorAccent = vec3(232.0/255.0, 53.0/255.0, 14.0/255.0); // --accent
    vec3 colorCream = vec3(242.0/255.0, 237.0/255.0, 228.0/255.0); // --cream

    // A mix of solid regions and dithered borders
    vec3 finalColor = colorDark;
    
    if (dithered > 0.5) {
        finalColor = colorAccent;
    } else {
        // Base background interpolates based on raw noise
        finalColor = mix(colorDark, colorCream, smoothstep(0.2, 0.8, n));
    }

    // Blend top edge to cream, bottom edge to dark, as section boundaries
    float topFade = smoothstep(0.85, 1.0, uv.y);
    float bottomFade = smoothstep(0.15, 0.0, uv.y);

    finalColor = mix(finalColor, colorCream, topFade);
    finalColor = mix(finalColor, colorDark, bottomFade);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

export function DitherCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Create shader program
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, VERTEX_SHADER);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, FRAGMENT_SHADER);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let animationFrameId: number;
    let startTime = performance.now();

    const render = (time: number) => {
      // Handle resizing properly by utilizing getBoundingClientRect and devicePixelRatio for sharp edges
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = Math.floor(rect.width * dpr);
      const displayHeight = Math.floor(rect.height * dpr);

      // Check if the canvas is not the same size.
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(timeLocation, (time - startTime) / 1000);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "min(400px, 40vh)", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
