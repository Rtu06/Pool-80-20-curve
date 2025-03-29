
// Tạo canvas
const canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Thêm màu nền
ctx.fillStyle = "#f0f0f0";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Vẽ lưới nền
ctx.strokeStyle = "#ddd";
for (let i = 0; i <= 400; i += 40) {
    // Đường dọc
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 400);
    ctx.stroke();
    
    // Đường ngang
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(400, i);
    ctx.stroke();
}

// Vẽ trục X và Y
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(400, 400); // Trục X
ctx.moveTo(0, 400);
ctx.lineTo(0, 0); // Trục Y
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// Thêm nhãn trục
ctx.fillStyle = "black";
ctx.font = "14px Arial";
ctx.fillText("A", 380, 420);
ctx.fillText("B", 10, 10);

// Vạch chia trục X
for (let i = 0; i <= 400; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 400);
    ctx.lineTo(i, 395);
    ctx.stroke();
    ctx.fillText(i / 2, i - 10, 415);
}

// Vạch chia trục Y
for (let i = 0; i <= 400; i += 40) {
    ctx.beginPath();
    ctx.moveTo(0, 400 - i);
    ctx.lineTo(5, 400 - i);
    ctx.stroke();
    ctx.fillText(i / 2, 10, 400 - i);
}

// Vẽ đường cong 80/20
ctx.beginPath();
for (let A = 1; A <= 160; A += 1) {
    const B = 20 * Math.pow(80 / A, 4);
    const x = A * 2;
    const y = 400 - B * 2;
    if (A === 1) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
}
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();
