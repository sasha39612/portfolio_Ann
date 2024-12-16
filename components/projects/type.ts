import { ImagePropsType, TextBlockElem } from "../../interfaces/common";


export type ButtonTitleType = Array<string>;

export interface ProjectsGraphicDesignType {
  id: string,
  image: ImagePropsType;
}

export interface ProjectsUX_UI_Type extends ProjectsGraphicDesignType{
  title: string,
  button: TextBlockElem;
  link?: { href: string };
}

export interface ProjectsTypes {
  proudText: string;
  buttonTitle: ButtonTitleType; 
  projectsUX_UI: ProjectsUX_UI_Type; 
  projectsGraphicDesign: ProjectsGraphicDesignType;
}
