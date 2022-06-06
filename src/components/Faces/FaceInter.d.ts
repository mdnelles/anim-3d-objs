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
   faceType: string;
   width?: number;
   height?: number | string;
   depth?: number;
   fgStyles?:
      | { border: string; bgc: string; opac: number | string }
      | undefined;
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
   styles: string | any;
   tranz: number | string;
}
export interface BuildProps {
   faceType: any;
   child: any;
}
