export function getUrlParam(parName, allPath) {
  var url = allPath || document.location.toString();
  var arrObj = url.split("?");

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split("&");
    var arr;

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");

      if (arr != null && arr[0] == parName) {
        return arr[1];
      }
    }
    return "";
  }
  else {
    return "";
  }

}