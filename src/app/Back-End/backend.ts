import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ILivre } from '../Models/livre';
 
export class InMemHeroService implements InMemoryDbService {
  createDb() {
      let livres:ILivre[]=[{
    Book_Id:1,Book_Name:"Big Data For Dummies",Book_ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51p6wBow%2B3L._SX389_BO1,204,203,200_.jpg",Book_ShortDescription:"Big data management is one of the major challenges facing business, industry, and not-for-profit organizations",Book_Price:98,Book_Category:'Big data', Book_Etoile:3
},
{
Book_Id:2,Book_Name:"Big Data",Book_ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/41JjodHnKHL._SX331_BO1,204,203,200_.jpg",Book_ShortDescription:"Bernard Marr’s Data Strategy is a must-have guide to creating a robust data strategy",Book_Price:120,Book_Category:'Big data', Book_Etoile:3.5
},
{
Book_Id:3,Book_Name:"Database Engineering",Book_ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51UvR3a63OL._SX379_BO1,204,203,200_.jpg",Book_ShortDescription:"This book has been an evolving dream of ours for about five years. Laine came to the DBA role without any formal technical training.",Book_Price:66,Book_Category:'Database', Book_Etoile:5
          
},
{
Book_Id:4,Book_Name:"Data-Intensive",Book_ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg",Book_ShortDescription:"The Big Ideas Behind Reliable, Scalable, and Maintainable Systems ",Book_Price:66,Book_Category:'Database', Book_Etoile:4.2
},
{
Book_Id:5,Book_Name:"Angular",Book_ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg",Book_ShortDescription:"The Big Ideas Behind Reliable, Scalable, and Maintainable Systems ",Book_Price:66,Book_Category:'Front-End', Book_Etoile:3.1
          
},
{
Book_Id:6,Book_Name:"Learning React",Book_ImageUrl:"https://images-eu.ssl-images-amazon.com/images/I/51Q43WRXJzL.jpg",Book_ShortDescription:"Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces ",Book_Price:89,Book_Category:'Front-End', Book_Etoile:4.5
          
},
{
Book_Id:7,Book_Name:"Pro C# 7", Book_ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/413Z89zzezL._SX348_BO1,204,203,200_.jpg",Book_ShortDescription:"Dive in and discover why Pro C# has been a favorite of C# developers worldwide for over 15 years",Book_Price:55.60,Book_Category:'Back-End', Book_Etoile:2.6
          
},
{
Book_Id:8,Book_Name:"Learning Node.js",Book_ImageUrl:"https://images-na.ssl-images-amazon.com/images/I/41NGBmeH1uL._SX403_BO1,204,203,200_.jpg",Book_ShortDescription:"Learning Node.js Development: Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web",Book_Price:98,Book_Category:'Back-End', Book_Etoile:4.6
          
}];
return (livres);
}

}