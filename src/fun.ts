let source: EventSource | null = null

export function initSse() {
  if (source) {
    source.close()
    source = null
    document.querySelector('#showAnswer')!.innerHTML = ''
  }

  source = new EventSource('http://127.0.0.1:9527/');
  source.onopen = (e: Event) => {
    handleAlert('success', '已连接，正在接收数据中...')
    // console.log('onopen', e)
  }

  source.addEventListener('foo', function(e: Event) {
    // console.log('自定义事件 foo', e)
  })

  source.addEventListener('bar', function(e: Event) {
    // console.log('自定义事件 bar', e)
  })

  source.onmessage = (e: MessageEvent<{ data: string }>) => {
    // console.log('onmessage', e)
    handleClassChange('answering')
    document.querySelector('#showAnswer')!.setAttribute('class', 'answering')
    document.querySelector('#showAnswer')!.innerHTML += e.data
  }

  source.onerror = () => {
    handleClassChange('waitAns')
    handleAlert('danger', '连接错误，已断开，重试中...')
  }

  source.addEventListener('over', function() {
    handleClassChange('waitAns')
    handleAlert('info', '推送完毕')
  })
}

const handleAlert = (type: string, message: string) => {
  const alert = document.querySelector<HTMLDivElement>('.alertBox')
  alert!.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `<div>${message}</div>`,
    '</div>'
  ].join('')
}

export const handleClose = () => {
  source && source.close()
  handleClassChange('waitAns')
  handleAlert('warning', '连接已关闭')
}

const handleClassChange = (className: string) => {
  const currentClass: string | null = document.querySelector('#showAnswer')!.getAttribute('class')
  if (currentClass !== className) document.querySelector('#showAnswer')!.setAttribute('class', className)
}