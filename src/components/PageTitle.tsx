export default function PageTitle(Props: {title: string, subTitle: string}){
    return(
        <div className="title-desc">
            <span className="uppercase font-semibold text-[#147efb] text-[17px] mb-[10px]">{Props.title}</span>
            <h3 className="text-[#2d2e32] text-[25px] leading-[1.4] mb-[50px] font-bold">{Props.subTitle}</h3>
        </div>
    )
}