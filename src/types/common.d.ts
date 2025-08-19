
interface Farm {
    id: string;
    title: string;
    address: string;
    size: number;
    location?: string;
    cropType: CropType;
    crop?: CropType;
    seed_variety?: string;
    soil_type?: string;
    name?: string;
    status?: PublishStatus;
    latitude: string;
    longitude: string;
    farmArea: Coords[];
  }
  
  interface Coords {
    latitude: number;
    longitude: number;
  }
  
  interface Project {
    image: Source;
    title: string;
    location: string;
    totalArea: number;
    amount: number;
    fundedPercentage: number;
    progress: number;
    annualRoi: number;
    grossYieldPercentage: number;
    netYieldPercentage: number;
    startDate: string,
    totalRoi: number,
    payout: string,
  }
  interface PortfolioPorjectProgress {
    image: Source;
    title: string;
    location: string;
    totalArea: number;
    amount: number;
    fundedPercentage: number;
    progress: number;
    annualRoi: number;
    grossYieldPercentage: number;
    netYieldPercentage: number;
    startDate: string,
    totalRoi: number,
    payout: string,
  }
  
  interface CropsSeasonListProps {
    farmLocation: string;
    crops: string;
    season: string;
    status: string;
  }
  interface Transaction {
    title: string;
    type: String;
    amount: number;
    status: string;
  }
  
  interface Rewards {
    id: number;
    total_rewards: string;
    amount: Amount[];
  }
  
  interface Amount {
    title: string;
    amount: string;
  }
  
  interface ProjectFarms {
      id: number,
      title: string,
      duration: string,
      price: number,
      roi: number,
      image: Source,
      roiData: RoiData[];
  }
  
  interface RoiData {
    x:number,
    y:number,
  }
  
  interface PaymentMethod {
    icon: Source,
    title: string,
  }
  
  interface Finance {
      icon: Source,
      balance: number,
      date: string,
      income: string,
      id: IncomeType,
      bgColor: ColorType;
  }
  
  interface Options {
    day: string;
    month: string;
    year: string;
  }
  
  interface CustomPieChart {
    x: string; 
    y: number; 
    label: string;
  }
  
  interface WalletBalance {
    available_balance: number
    cash_balance: number
    reward_balance: number
  }
  
  interface PaymentOption {
    title: string;
    icon: Source;
    id: number;
    isDirectPayment: boolean;
    paymentMethodCode: string;
  }
  
  
  declare type PublishStatus = "published" | "pending";
  
  declare type ToastType = "success" | "error";
  
  declare type TrxFunc = (key: string, arg?: any) => string;
  
  declare type CropType =
    | "wheat"
    | "rice"
    | "sugarcane"
    | "corn"
    | "cotton"
    | "potato";
  
    declare type IncomeType =
    | "monthlyIncome"
    | "totalIncome"
    | "investedCrops"
    | "annualReturn";
    