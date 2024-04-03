import { useEffect, useState } from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";

const LeftNav = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/categories.json");
      const data = await res.json();
      setCategoryData(data);
      setLoader(false);
    };
    setLoader(true);
    loadData();
  }, []);
  
  return (
    <div>
      <div>
        <h4 className="text-xl font-semibold mb-4">All Category</h4>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
            {
                categoryData.map(category => <CategoryCard key={category.id} category={category} loader={loader}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
