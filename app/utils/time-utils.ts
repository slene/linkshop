import dayjs from "dayjs";

export function getNowString() {
  return dayjs().format("YYYY-MM-DD HH:mm:ss.SSS");
}