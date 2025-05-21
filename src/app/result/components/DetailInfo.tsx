interface DetailInfoData {
  title: string;
  subTitle?: string;
  desc: string;
  studyMethod?: string;
}

export default function DetailInfo({ data }: { data: DetailInfoData }) {
  return (
    <div>
      <strong className="md:text-[1.375rem]">{data.title}</strong>
      <div className="mt-4 w-full rounded-2xl bg-[#2A374A] p-5 md:p-7 md:text-[1.125rem]">
        {data.subTitle && (
          <p className="mb-5 font-semibold md:mb-7">{data.subTitle}</p>
        )}
        <p>{data.desc}</p>
      </div>
    </div>
  );
}
