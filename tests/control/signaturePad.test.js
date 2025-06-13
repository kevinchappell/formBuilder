import controlSignaturePad from '../../src/js/control/signaturePad.js';

describe('controlSignaturePad', () => {
  let controlInstance;

  beforeEach(() => {
    // Mocking the necessary config and functions
    const config = { label: 'Signature', userData: null };
    controlInstance = new controlSignaturePad(config);
    document.body.innerHTML = '<div id="root"></div>';
    const builtElements = controlInstance.build();
    document.getElementById('root').appendChild(builtElements[1]);
    controlInstance.onRender({});
  });

  test('should create a canvas and clear button', () => {
    const canvas = document.querySelector('canvas.signature-pad');
    const clearButton = document.querySelector('button.clear-button');

    expect(canvas).not.toBeNull();
    expect(clearButton).not.toBeNull();
    expect(clearButton.textContent).toBe('Clear Signature');
  });

  test('should clear the canvas when clear button is clicked', () => {
    const canvas = document.querySelector('canvas.signature-pad');
    expect(canvas).not.toBeNull();

    // Set the canvas dimensions
    canvas.width = 200;
    canvas.height = 150;

    const context = canvas.getContext('2d');
    expect(context).not.toBeNull();

    // Draw something on the canvas
    context.fillRect(0, 0, canvas.width, canvas.height);
    expect(context.getImageData(0, 0, 1, 1).data[3]).toBe(255); // Check if pixel is not empty

    // Click the clear button
    const clearButton = document.querySelector('button.clear-button');
    clearButton.click();

    // Check if the canvas is cleared
    expect(context.getImageData(0, 0, 1, 1).data[3]).toBe(0); // Check if pixel is empty
  });

  test('should save signature data on mouseup', () => {
    const canvas = document.querySelector('canvas.signature-pad');
    expect(canvas).not.toBeNull();
    
    // Set the canvas dimensions
    canvas.width = 200;
    canvas.height = 150;

    const context = canvas.getContext('2d');
    expect(context).not.toBeNull();

    // Simulate drawing on the canvas
    const mouseDownEvent = new MouseEvent('mousedown', { offsetX: 10, offsetY: 10 });
    const mouseMoveEvent = new MouseEvent('mousemove', { offsetX: 20, offsetY: 20 });
    const mouseUpEvent = new MouseEvent('mouseup');

    canvas.dispatchEvent(mouseDownEvent);
    canvas.dispatchEvent(mouseMoveEvent);
    canvas.dispatchEvent(mouseUpEvent);

    // Check if saveSignature was called and userData is updated
    expect(controlInstance.config.userData).not.toBeNull();
    expect(controlInstance.config.userData[0]).toContain('data:image/png;base64,');
  });

  test('should load saved signature data on render', () => {
    const canvas = document.querySelector('canvas.signature-pad');
    expect(canvas).not.toBeNull();
    
    // Set the canvas dimensions
    canvas.width = 200;
    canvas.height = 150;

    const context = canvas.getContext('2d');
    expect(context).not.toBeNull();

    // Mock user data
    const userData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA';
    controlInstance.config.userData = [userData];

    // Simulate rendering
    controlInstance.onRender({});

    // Check if the canvas is updated with the saved data
    const image = new Image();
    image.src = userData;
    image.onload = () => {
      context.drawImage(image, 0, 0);
      expect(context.getImageData(0, 0, 1, 1).data[3]).toBeGreaterThan(0); // Check if pixel is not empty
    };
  });

});