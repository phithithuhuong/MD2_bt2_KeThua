import {Point2D} from "./Point2D";
class Point3D extends Point2D{
    private z:number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    getZ(): number {
        return this.z;
    }

    setZ(value: number) {
        this.z = value;
    }
    getXYZ():object{
        {
        }
        return
    }
    setXYZ(x:number,y:number,z:number):void{
        return
    }
}
let myPoint3D =new Point3D(3,4,5)