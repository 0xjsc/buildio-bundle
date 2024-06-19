let gl, canvas;

class Render {

  constructor() {
    this.tau = Math.PI * 2;
  };

  attachConfig(gl_, canvas_) {
    gl = gl_;
    canvas = canvas_;
  }

  set onRender(callback) {
    this.positionBuffer = gl.createBuffer();
    this.colorBuffer = gl.createBuffer();

    this.startRenderLoop(callback);
  };

  startRenderLoop(callback) {
    this.clearScreen();

    callback();

    window.requestAnimationFrame(() =>
      this.startRenderLoop(callback));
  }

  clearScreen() {
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clearDepth(1.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  };

  createProgram(vertex, fragment) {
    const prog = gl.createProgram();

    gl.attachShader(prog, vertex);
    gl.attachShader(prog, fragment);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) gl.deleteProgram(prog);

    gl.useProgram(prog);

    return prog;
  };

  createShader(type, code) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, code);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;

    return shader;
  };

  resizeCanvas() {
    const dpi = window.devicePixelRatio || 1;
    const correctWidth = canvas.clientWidth * dpi;
    const correctHeight = canvas.clientWidth * dpi;

    if (canvas.width == correctWidth &&
      canvas.health == correctHeight) return;

    canvas.width = correctWidth;
    canvas.height = correctHeight;
  };

  renderLine(x, y, x1, y1, r, g, b, a, size) {
    const vertex = `
    attribute vec2 position;

    void main() {
      gl_Position = vec4(position, ${x}, ${y});
    }
    `;
    const fragment = `
    void main() {
      gl_FragColor = vec4(${r}, ${g}, ${b}, ${a});
    }
    `;

    const shaderVertex = this.createShader(gl.VERTEX_SHADER, vertex);
    const shaderFragment = this.createShader(gl.FRAGMENT_SHADER, fragment);

    if (!shaderVertex || !shaderFragment) return;

    const prog = this.createProgram(shaderVertex, shaderFragment);

    const positionLoc = gl.getAttribLocation(prog, "position");
    const positionBuffer = this.positionBuffer;
    const posBuffer = new Float32Array([x, y, x1, y1]);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, posBuffer, gl.STATIC_DRAW);

    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, size, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.LINES, 0, 2);
  };

  renderRectangle(x, y, width, height, r, g, b, a) {

    const vertices = new Float32Array([
      x, y,
      x + width, y,
      x + width, y + height,
      x, y + height
    ]);
    const colors = new Float32Array([
      r, g, b, a,
      r, g, b, a,
      r, g, b, a,
      r, g, b, a
    ]);

    const vertexBuffer = this.positionBuffer;
    const colorBuffer = this.colorBuffer;

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

    const vertexShaderSource = `
    attribute vec2 position;
    attribute vec4 color;
    varying vec4 vColor;
    
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
      vColor = color;
    }
    `;

    const fragmentShaderSource = `
    precision mediump float;
    varying vec4 vColor;
    
    void main() {
      gl_FragColor = vColor;
    }
    `;

    const vertexShader = this.createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = this.createProgram(vertexShader, fragmentShader)

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const colorAttributeLocation = gl.getAttribLocation(program, 'color');

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(colorAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
  };

  renderTriangle(x, y, s, s1, s2, r, g, b, a) {

    const vertices = new Float32Array([
      x, y,
      x + s1, y + s,
      x + s2, y + s
    ]);
    const colors = new Float32Array([
      r, g, b, a,
      r, g, b, a,
      r, g, b, a,
      r, g, b, a
    ]);

    const vertexBuffer = this.positionBuffer;
    const colorBuffer = this.colorBuffer;

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

    const vertexShaderSource = `
    attribute vec2 position;
    attribute vec4 color;
    varying vec4 vColor;

    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
      vColor = color;
    }
    `;

    const fragmentShaderSource = `
    precision mediump float;
    varying vec4 vColor;

    void main() {
      gl_FragColor = vColor;
    }
    `;

    const vertexShader = this.createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = this.createProgram(vertexShader, fragmentShader)

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const colorAttributeLocation = gl.getAttribLocation(program, 'color');

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(colorAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 4);
  };

  renderCircle(x, y, radius, r, g, b, a, verticlesCount = 100) {
    const verticles = [];

    for (let i = 0; i < verticlesCount; i++) {
      const angle = (2 * Math.PI) / verticlesCount * i;
      const vertexX = x + radius * Math.cos(angle);
      const vertexY = y + radius * Math.sin(angle);
      verticles.push(vertexX, vertexY);
    }

    const vertexShaderSource = `
        attribute vec2 position;

        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
    `;

    const fragmentShaderSource = `
        precision mediump float;
        uniform vec4 color;

        void main() {
          gl_FragColor = color;
        }
    `;

    const vertexShader = this.createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const prog = this.createProgram(vertexShader, fragmentShader);

    const position = gl.getAttribLocation(prog, "position");
    const color = gl.getUniformLocation(prog, "color");

    const verticlesBuffer = this.positionBuffer;

    gl.bindBuffer(gl.ARRAY_BUFFER, verticlesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticles), gl.STATIC_DRAW);

    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    gl.uniform4f(color, r, g, b, a);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, verticles.length / 2);
  }

};

export default Render;
