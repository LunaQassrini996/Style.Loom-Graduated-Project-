export interface ContactData{
    photo:string;
    icon:string;
    contactType:string;
    btnName:string;
}
export const contactCardData:ContactData[]=[
    {photo:"/icons/Icon (5).svg",icon:"/icons/email Icon.svg",contactType:"Email",btnName:"support@StyleLoom.com"},
    {photo:"/icons/Icon (6).svg",icon:"/icons/phone Icon.svg",contactType:"Phone",btnName:"+1 (555) 123-4567"},
    {photo:"/icons/Icon (7).svg",icon:"/icons/location Icon.svg",contactType:"Location",btnName:"Get Direction"}
]