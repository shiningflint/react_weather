export default {
  unixToUTC: (utcSeconds) => {
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds)
    return d;
  },
  format24h: (dateObj, minute = false) => {
    let minutes = ":00";
    if (minute === true) {
      if (dateObj.getMinutes() < 10) {
        minutes = ":0"+dateObj.getMinutes().toString();
      } else {
        minutes = ":"+dateObj.getMinutes().toString();
      }
    }
    if (dateObj.getHours() < 10) {
      return "0"+dateObj.getHours().toString()+minutes;
    } else {
      return dateObj.getHours().toString()+minutes;
    }
  }
}
