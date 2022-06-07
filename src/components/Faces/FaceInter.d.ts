export interface FaceProps {
   bfv?: string | boolean;
   bgc?: string | boolean;
   border?: string | boolean;
   children?: any;
   faceType?: any;
   fgStyles?: any;
   fontFamily?: string | any;
   depth?: number | any;
   height?: number | string;
   id?: string | number | boolean;
   indivStyles?: object | any;
   left?: number;
   margin?: number | string;
   opac?: number | string | boolean | undefined;
   padding?: number | string;
   position?: number;
   top?: number;
   tranz: any;
   width?: number | string;
}

export interface CuboidProps {
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
   indivStyles?: object | any;
   width?: number;
   height?: number | string;

   tranz: number | string;
}
export interface BuildProps {
   faceType: any;
   child: any;
}

export interface VarsProps {
   bfv?: string | any;
   bgc?: string | any;
   border?: string | any;
   opac?: string | any;
   fontFamily?: string | any;
}
