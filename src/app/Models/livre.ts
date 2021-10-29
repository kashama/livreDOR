export interface ILivre{

    Book_Id:number;
    Book_Name:string;
    Book_LongDescription?:string; //pas obligatoire
    Book_ImageUrl?:string; //pas obligatoire
    Book_InStock?:boolean; //pas obligatoire
    Book_ShortDescription:string;
    Book_Price:number;
    Book_Category:string;
    Book_Etoile?:number; //pas obligatoire
}