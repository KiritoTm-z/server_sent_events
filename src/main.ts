import './style.css'
import {
  initSse,
  handleClose
} from './fun'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="alertBox" style="margin-top: 40px"></div>
  <div style="margin-top: 40px">
    <button id="startConnect" class="btn btn-primary" style="margin-bottom: 30px;">开始连接sse</button>
    <button id="closeConnect" class="btn btn-danger" style="margin-bottom: 30px">关闭连接sse</button>
  </div>
  <div id="showAnswer" class="waitAns"></div>
`

window.onload = (_ => {
  document.getElementById('startConnect')!.addEventListener('click', initSse)
  document.getElementById('closeConnect')!.addEventListener('click', handleClose)
})