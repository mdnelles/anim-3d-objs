export interface FaceProps {
   bfv?: string | boolean;
   bgc?: string | boolean;
   border?: string | boolean;
   children?: any;
   faceType?: any;
   fgStyles?: any;
   depth?: number | any;
   height?: number | string;
   id?: string | number | boolean;
   inStyles?: object | any;
   left?: number;
   margin?: number | string;
   opac?: number | string | boolean | undefined;
   padding?: number | string;
   position?: number;
   top?: number;
   tranz: any;
   width?: number | string;
}

export interface ObjProps {
   anim1?: string;
   anim2?: string;
   border?: string;
   children: any;
   depth?: number;
   faceType: string;
   fgStyles?: { border: string; bgc: string; opac: number | string } | any;
   faces?:
      | {
           front: boolean;
           back: boolean;
           left: boolean;
           right: boolean;
           top: boolean;
           bottom: boolean;
        }
      | undefined;
   inStyles?: object | any;
   width?: number;
   height?: number | string;

   tranz: number | string;
}
export interface BuildProps {
   faceType: any;
   child: any;
}
