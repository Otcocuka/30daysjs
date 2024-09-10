const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight



ctx.strokeStyle = '#40e0d0'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = '10'
let hue = 0
let direction  = true

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e) {
    if (!isDrawing) return 
    console.log(e);
    

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`


    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    
    hue++
    console.log(direction);

    if (ctx.lineWidth>=100 || ctx.lineWidth<=9){
        direction = !direction
        
        
    }

    if (direction){
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mousedown', (e)=>{
    lastX = e.offsetX
    lastY = e.offsetY
    isDrawing = true})
canvas.addEventListener('mouseup', ()=> isDrawing = false)
canvas.addEventListener('mouseout', ()=> isDrawing = false)

