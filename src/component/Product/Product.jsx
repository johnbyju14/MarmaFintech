import { useRef, useEffect } from 'react'
import './Product.css'

export default function Product() {
  const scrollContainerRef = useRef(null);
  const divContainerRef =useRef(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollStartDiv = divContainerRef.current;

  

    const handleWheel = (e) => {
      e.preventDefault();
       const scroll = scrollContainerRef.current
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollStartDiv.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const cardData = [
    {
      id: "001",
      title: "THROUGHBIT",
      description: "Redefining Bitcoin and Ethereum Transactions in India with INRFalcon for Lightning-Fast Trading.",
      backgroundImage: "url('/public/images/product/throughbit2.png')",
    },
    {
      id: "002",
      title: "COINDAIRY",
      description: "Your Gateway to Staying informed, Engaged, and Leading the Way in the Crypto Space",
      backgroundImage: "url('/public/images/product/coindairybg.png')",
    },
    {
      id: "003",
      title: "SQUARENFT",
      description: "Dive into the Future of RealEstate and Own Your NFT Land from Any Corner of the Globe.",
      backgroundImage: "url('/public/images/product/squarenft.png')",
    },
    {
      id: "004",
      title: "BITCOINS",
      description: "Your Innovative Exchange Hub Connecting Cash and Cryptocurrency for Easy Bitcoin Transactions.",
      backgroundImage: '/public/images/product/bitcoin.png',
    },
  ];
  
  return (
    <section className="relative overflow-hidden product-main-wrapper" ref={divContainerRef}>
        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll scrollbar-hide" style={{display:"grid"}}
        >
           <div className="flex space-x-4 pb-4 w-max flex-wrap" style={{alignItems:'center'}}>
      {cardData.map(({ id, title, description, backgroundImage }) => (
        <div
          key={id}
          className="flex-shrink-0 w-[300px] h-[180px] rounded-xl bg-cover bg-center text-white p-6 card"
          style={{ backgroundImage }}
        >
          <div className="h-full flex flex-col justify-between bg-black bg-opacity-50 rounded-xl p-4">
            <h1 className="text-sm opacity-80">{title}</h1>
            <div className="space-y-1">
              <h2 className="font-mono">{description}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
       
    </section>
  );
}
