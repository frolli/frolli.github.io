import{m as o,A as y,B as m,p as n}from"../index34169.js";class s{static async fetchAll(a){return(await o("/admin/categories",a)).data}static async getCategoryDetail(a){return(await o(`/admin/categories/${a}`)).data.category}static async createCategory(a){return(await y("/admin/categories",a)).data.category}static async deleteCategory(a){return(await m(`/admin/categories/${a}`)).data.category}}const i=localStorage.getItem("categories"),r=i?JSON.parse(i):null,c=localStorage.getItem("materialCategories"),p=c?JSON.parse(c):[],l=localStorage.getItem("newsCategories"),h=l?JSON.parse(l):[],w=n({id:"category",state:()=>({category:{},categories:r&&r.categories?r.categories:[],total_categories:Number,response_categories:r,material_categories:p,news_categories:h}),getters:{responseCategories:e=>e.response_categories,allCategories:e=>e.categories,allMaterialCategories:e=>e.material_categories,allNewsCategories:e=>e.news_categories,getTotalCategories:e=>e.response_categories&&e.response_categories.total?e.response_categories.total:0,getCurrentCategory:e=>e.category},actions:{async fetchAllCategories(e){await s.fetchAll(e).then(a=>{this.response_categories=a,localStorage.setItem("categories",JSON.stringify(a)),this.fetchMaterialCategories(),this.fetchNewsCategories()})},async fetchMaterialCategories(){const e=new Map;e.set("typology","materiale"),await s.fetchAll(e).then(a=>{this.material_categories=a.categories,localStorage.setItem("materialCategories",JSON.stringify(a.categories))})},async fetchNewsCategories(){const e=new Map;e.set("typology","news"),await s.fetchAll(e).then(a=>{this.news_categories=a.categories,localStorage.setItem("newsCategories",JSON.stringify(a.categories))})},async fetchCategoryDetail(e){await s.getCategoryDetail(e).then(a=>this.category=a)},async createCategory(e){await s.createCategory(e).then(a=>this.category=a)},async deleteCategory(e){await s.deleteCategory(e).then(a=>this.category=a)}}});class g{static async fetchAllMaterials(a){return(await o("/materials",a)).data}static async getMaterialDetail(a){return(await o(`/materials/${a}`)).data.material}}const S=n({id:"material",state:()=>({material:{},materials:[],response_material:{}}),getters:{allMaterials:e=>e.response_material.materials,responseMaterial:e=>e.response_material,getTotalMaterial:e=>e.response_material?e.response_material.total:0,getCurrentMaterial:e=>e.material},actions:{async fetchAllMaterials(e){await g.fetchAllMaterials(e).then(a=>{this.response_material=a,this.materials=a.materials})},async fetchMaterialDetail(e,a){await g.getMaterialDetail(e).then(t=>{this.material=t}).catch(t=>{})}}});export{w as a,S as u};
