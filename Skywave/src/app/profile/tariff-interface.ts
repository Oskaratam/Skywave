export interface Tariff {
    tariffName : string;
    pricePerMonth : number;
    data : number;
    calls : number;
    sms : number;
    paymentDate ?: string;
    imageSrc ?: string;
    colorScheme : any;
}
