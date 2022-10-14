import { ctx } from "./script.js";
export const Tao = 2 * Math.PI;
export function dist(x1, y1, x2, y2) {
    return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
}
export function slope(x1, y1, x2, y2) {
    return (y1 - y2) / (x1 - x2);
}
export function objectSlope(ob1, ob2) {
    return slope(ob1.x, ob1.y, ob2.x, ob2.y);
}
export function objectDist(ob1, ob2) {
    return Math.sqrt(((ob1.x - ob2.x) ** 2) + ((ob1.y - ob2.y) ** 2));
}
export function line(obj1, obj2) {
    ctx.beginPath();
    ctx.moveTo(obj1.x, obj1.y);
    ctx.lineTo(obj2.x, obj2.y);
    ctx.stroke();
}
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
