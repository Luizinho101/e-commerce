
import Image from "next/image";


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

async function gerProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if(!res.ok){
    throw new Error('Erro');
  }
  return res.json();
}

export default async function Home() {
  const products = await gerProducts();
  return (
<form>

 <div className="p-4 sm:p-6 lg:p-8 bg-gray-50">

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
    
    {products.map((produtos: Product) => 
        
   
      <div 
        key={produtos.id} 
        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col p-4"
      >
        
        
        <div className="relative w-full h-48 mb-4 flex items-center justify-center">
         
          <img 
            src={produtos.image} 
            alt={produtos.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex flex-col flex-grow text-center">
          <h3 
            className="text-gray-700 text-sm font-medium mb-2 line-clamp-3 flex-grow"
          >
       
            {produtos.description}
          </h3>
          
         
          <h3 className="text-xl font-bold text-indigo-600 mt-auto">
            ${produtos.price.toFixed(2)}
          </h3>
         
        </div>
      </div>
    )}
    
  </div>
</div>
</form>
  );

}
