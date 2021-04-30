// 根据后缀名判断文件类型
function fileType(suffix: string = '') {
  const typeList = ['image', 'audio', 'video', 'excel', 'file'];
  const length = typeList.length - 1;
  const suffixJson: any = {
    image: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'bmp', 'pic', 'tif'],
    audio: ['mp3', 'ogg', 'wav', 'acc', 'vorbis', 'silk'],
    video: ['mp4', 'webm', 'avi', 'rmvb', '3gp', 'flv', 'mov', 'rm'],
    excel: ['xls', 'xlsx'],
  };
  const resultList: boolean[] = [];
  let attr: any = '';
  for (attr in suffixJson) {
    if (suffixJson[attr]) {
      resultList.push(suffixJson[attr].includes(suffix));
    }
  }

  const posIndex = resultList.indexOf(true);

  return posIndex !== -1 ? typeList[posIndex] : typeList[length];
}

// 提示框插件
// str（提示的字符串）
// msec（提示框消失的时间，默认3秒）
// noMask（是否去除遮罩）
function alerts(
  str?: string,
  msec?: number | string,
  noMask?: boolean | number
) {
  return 1;
}

// 项目中用到的工具函数
export { alerts, fileType };
