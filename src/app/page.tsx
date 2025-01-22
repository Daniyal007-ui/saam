import OrderForm from "@/components/OrderForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
           <div className="text-center flex justify-center"><Image src={"/logo.png"} alt="logo" height={100} width={100}></Image></div>

      <div className="h-auto   w-full flex flex-col justify-around items-center py-6 px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Image section */}
        <div className="bg-gradient-to-r from-cyan-100 to-emerald-200 mt-2" >
          <div className=" mb-5">
            <Image src={"/pic1.jpg"} alt="saam cream" height={300} width={300} className="mx-auto  bg-gradient-to-r from-cyan-100 to-cyan-100 " />
          </div>

          {/* Main headline */}
          <div className="bg-gradient-to-r from-cyan-100 to-emerald-200 overflow-hidden p-2 py-3 sm:px-8 rounded-xl shadow-lg w-full md:w-4/5 lg:w-3/5">
            <h1 className="text-2xl sm:text-2xl md:text-3xl text-indigo-600 font-serif font-bold">
              REMOVE MELSALMA, FRECKLES AND HYPERPIGMENTATION
            </h1>
            <h1 className="text-3xl sm:text-2xl md:text-3xl text-orange-400 font-mono font-semibold mt-2">
              WITHIN 2 WEEKS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black font-thin mt-4">
              More than 1000 orders per day, reached the top of the best-selling face creams in the world✔️
            </p>
          </div>
        </div>
        {/* User satisfaction section */}
        <p className="text-blue-500 text-xl  mt-4 max-w-4xl">
          <span className="font-bold font-mono">More than 96%</span> of users are satisfied with its effectiveness after{" "}
          <span className="font-bold font-mono">7 days of use</span>
        </p>

        {/* Refund guarantee */}
        <div className="bg-red-600 h-16 sm:h-20 w-full  mt-8 flex justify-center items-center">
          <p className="text-white md:text-2xl sm:text-xl px-2 italic font-mono">
            👉 SKIN DOES NOT IMPROVE, REFUND YOUR MONEY
          </p>
        </div>

        {/* Customer image */}
        <div className="mt-8">
          <Image src={"/pic2.jpg"} alt="pic 2" height={400} width={400} className="mx-auto rounded-xl shadow-md" />
        </div>

        {/* Customer testimonial */}
        <h3 className="font-mono p-2 italic text-2xl mt-4 ">A Saam customer used the cream after 3 weeks</h3>

        <h3 className="font-mono text-xl mt-4  border-2 border-cyan-300 rounded-2xl p-4 w-full sm:w-3/4 md:w-2/3 mx-auto">
          💦Bringing beauty to <span className="font-bold">302,039 customers</span>, helping them{" "}
          <span className="font-bold">remove dark spots,</span> be more confident and love life more with their skin
        </h3>

        {/* Additional customer images */}
        <div className="mt-4">
          <Image src={"/pic3.jpg"} alt="pic3" height={350} width={350} className="mx-auto rounded-xl shadow-md" />
        </div>

        {/* Product info */}
        <h1 className="font-mono font-bold text-yellow-600 text-3xl text-center mt-8">SAAM⭐️</h1>
        <h1 className="font-mono font-bold text-gray-600 text-3xl text-center">RENEWAL FACE CREAM</h1>
        <p className="italic text-center mt-4 max-w-3xl mx-auto">
          SAAM is the most advanced product, specializing in removing black spots and hyperpigmentation. Brings results after
          only 14 days.
        </p>

        {/* Treatment benefits */}
        <div className="mt-8 text-black text-xl bg-gradient-to-r from-slate-200 to-teal-200 font-serif text-start p-6 rounded-xl w-full sm:w-3/4 md:w-2/3 mx-auto">
          <p>✨Treatment: Melasma, freckles, age spots, hyperpigmentation, and dark spots are removed</p>
          <p>✨Brightens skin, tightens pores</p>
          <p>✨Nourishes, restores skin, moisturizes, and makes skin smoother</p>
        </div>

        {/* Product image */}
        <div className="mt-8">
          <Image src={"/pic4.jpg"} alt="pic4" height={300} width={400} className="mx-auto rounded-xl shadow-md" />
        </div>

        {/* Remove dark spots call to action */}
        <h1 className="mt-8 text-3xl text-blue-700 font-serif font-bold ">
          Remove dark spots, bring back perfect skin in{" "}
          <span className="text-orange-400 font-mono font-semibold">just 3 weeks</span>
        </h1>

        <p className="mt-3 font-serif text-xl text-gray-500 text-center max-w-3xl mx-auto">
          You have tried many products, but it still does not go away. The black spots keep following you for a long time,
          even getting worse ❗️
        </p>

        {/* Customer image */}
        <div className="mt-8">
          <Image src={"/pic5.jpg"} alt="pic5" height={150} width={150} className="rounded-full mx-auto" />
        </div>

        {/* What are the advantages section */}
        <h1 className="text-2xl font-semibold font-mono mt-8 text-red-600 text-center">
          WHAT ARE THE ADVANTAGES OF SAAM CREAM?
        </h1>

        {/* Advantage 1 */}
        <div className="mt-4 border p-6 text-xl border-cyan-300 rounded-2xl font-mono w-full sm:w-3/4 md:w-2/3 mx-auto">
          <div className="flex items-center space-x-4">
            <Image src={"/pic6.jpg"} alt="pic6" height={150} width={100} className="rounded-full" />
            <p className="text-gray-500">
              High quality <span className="font-bold">Korean technology</span>, You can easily see that dark spots,
              melasma, and freckles <span className="font-bold">will fade away in 7 days</span>
            </p>
          </div>
        </div>

        {/* Advantage 2 */}
        <div className="mt-4 border p-6 text-xl border-cyan-300 rounded-2xl text-black font-mono w-full sm:w-3/4 md:w-2/3 mx-auto">
          <div className="flex items-center space-x-4">
            <Image src={"/pic7.jpg"} alt="pic7" height={150} width={100} className="rounded-full" />
            <p className="text-gray-500">
              If you use the cream daily, it will <span className="font-bold">remove dark spots from the root</span>,
              maintaining beautiful and healthy skin from within.
            </p>
          </div>
        </div>

        {/* Advantage 3 */}
        <div className="mt-4 border p-6 text-xl border-cyan-300 rounded-2xl text-black font-mono w-full sm:w-3/4 md:w-2/3 mx-auto">
          <div className="flex items-center space-x-4">
            <Image src={"/pic8.jpg"} alt="pic8" height={150} width={100} className="rounded-full" />
            <p className="text-gray-500">
              With many <span className="font-bold">natural ingredients,</span> it helps protect the skin from the
              surrounding environment, <span className="font-bold">no side effects</span>. Can be used for all skin types
            </p>
          </div>
        </div>

        {/* Customer feedback */}
        <div className="bg-gradient-to-r from-neutral-200 to-sky-300 mt-8 p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-mono text-center font-bold text-blue-700">BRINGING BEAUTY TO</h1>
          <h1 className="text-2xl font-mono  font-bold text-center text-orange-400">302,039 CUSTOMERS</h1>

          <div className="bg-white text-blue-600 border border-blue-600 mt-6 rounded-lg font-serif text-xl p-6">
            With the mission of helping many customers regain their natural beauty. And we have helped more than 300,000
            customers achieve that, and the number is growing.
          </div>

          <h1 className="text-black font-bold mt-6  animate-flash text-center text-3xl font-mono">FEEDBACK FROM CUSTOMERS</h1>
          <div className="mt-8 text-center">
            <Image src={"/pic9.jpg"} height={400} width={400} alt="pic9" className="mx-auto rounded-xl shadow-md" />
          </div>

          <p className="text-xl border border-1px border-white rounded-3xl p-6 text-black mt-6 font-mono">
            ✔️ I am really happy to have placed my trust in Saam and received great results. Feel happier and more confident than ever in your skin.
          </p>

          <div className="mt-8 text-center">
            <Image src={"/pic10.jpg"} height={400} width={400} alt="pic10" className="mx-auto rounded-xl shadow-md" />
          </div>
        </div>

        {/* Final call to action */}
        <div className="shadow-2xl rounded-2xl mt-2 h-[1700px] shadow-emerald-600  p-2">
          <div >
            <Image src={"/pic5.jpg"} alt="saam cream" height={250} width={300} className="rounded-3xl mt-8 mx-auto" />
          </div>

          <h1 className="font-mono mt-8 font-bold text-yellow-600 text-3xl text-center">SAAM⭐️</h1>
          <p className="text-2xl italic p-2 font-mono mt-4 text-gray-500 ">
            Try Saam Face cream now, the sooner you use it, the more effective it will be. Do not let the situation get worse.
          </p>

          <div className="mt-6 text-center text-2xl">🔶🔶🔶🔶</div>
          <p className="text-xl p-2 font-semibold font-serif mt-6 text-blue-600">
            And this is also the time to offer a 50% discount for the fastest 100 customers.
          </p>

          {/* 50% sale button */}
          <div className="text-3xl p-3 h-16 w-13 animate-flash bg-red-500 rounded-full text-white mt-6 text-center">
            Sale 50%
          </div>

          {/* Cash on delivery */}
          <h1 className="mt-6 font-mono text-2xl font-semibold italic text-gray-600 text-center">
            CASH ON DELIVERY + FREE SHIPPING
          </h1>
          <OrderForm />

          {/* Form inputs 
          <div className="w-full sm:w-3/4 md:w-2/3 p-2  lg:w-1/2 mx-auto mt-6 space-y-4">
            <input type="text" placeholder="Fill in Name:" className="border-16 text-2x4 w-full h-l border-teal-500 px-4" />
            <input type="number" placeholder="Fill in Phone Number:" className="border-4 w-full h-16 text-2xl border-teal-500 px-4" />
            <input type="text" placeholder="Fill in Address:" className="border-4 w-full h-16 text-2xl border-teal-500 px-4" />
            <input type="text" placeholder="Your Country:" className="border-4 w-full h-14 text-2xl border-teal-500 px-4" />
<select name="select" id="select">
  <option value="1" className="border-4 w-full h-14 text-2xl border-teal-500 px-4">BUY 1 = 161 AED + Free 1 Mini Young</option>
</select>
          </div>

          {/* Final Order button 
          <div className="bg-red-600 h-18 text-center p-4 pb-3 w-full mt-6 text-white font-mon text-5xl rounded-lg cursor-pointer">
            ORDER NOW
          </div>
*/}
        </div>
      </div>

    </>
  );
}
