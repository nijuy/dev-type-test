interface DetailInfoData {
   title: string,
   subTitle?: string,
   desc: string,
   studyMethod?: string,
}

export default function DetailInfo({ data }: { data: DetailInfoData }) {

   return (
      <div>
         <strong className="md:text-[22px]">{data.title}</strong>
         <div className="w-full md:text-[18px] rounded-[16px] md:p-7 p-5 mt-4 bg-[#2A374A]">
            {data.subTitle &&
               <p className="font-semibold md:mb-7 mb-5">{data.subTitle}</p>
            }
            <p>{data.desc}</p>
         </div>
      </div>
   )
}