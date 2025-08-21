interface Farm {
  // id: string;
  // title: string;
  // address: string;
  // size: number;
  // location?: string;
  // cropType: CropType;
  // crop?: CropType;
  // seed_variety?: string;
  // soil_type?: string;
  // // name?: number;
  // name?: string;
  // status?: PublishStatus;
  // latitude: string;
  // longitude: string;
  // // addressCoords: {
  // //   latitude: number;
  // //   longitude: number;
  // // };
  // farmArea: Coords[];
  id: number;
  title: string;
  cropType: CropType;
  name?: string;
  address: string;
  location?: string;
  irrigation_source?: string;
  latitude: string;
  longitude: string;
  size: string;
  soil_type?: string;
  sowing_method?: string;
  seed_variety?: string;
  crop?: CropType;
  user_id?: number;
  sowing_date?: string;
  status: PublishStatus;
  farm_configuration?: Coords[];
  farmArea?: Coords[];
}

interface Coords {
  latitude: number;
  longitude: number;
  id: string;
}

interface Project {
  image: Source;
  title: string;
  location: string;
  totalArea: number;
  amount: number;
  fundedPercentage: number;
  progress: number;
  returnPercentage: number;
  grossYieldPercentage: number;
  netYieldPercentage: number;
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

interface FarmStats {
  total_farms: number
  total_land: number
  crops: Crops[];
}

interface Crops {
  label: string;
  value: number;
}

interface Enums {
  irrigation_source: string[];
  soil_type: string[];
  sowing_method: string[];
  seed_variety: string[];
  crop: string[];
  crop_stage: string[];
}

interface ActivityRecord {
  date: string;
  activityType: string;
  description: string;
}

declare type PublishStatus = 'published' | 'pending';

declare type ToastType = 'success' | 'error';

declare type TrxFunc = (key: string, arg?: any) => string;

declare type CropType =
  | 'wheat'
  | 'rice'
  | 'sugarcane'
  | 'corn'
  | 'cotton'
  | 'potato'
  | 'maize'
  | 'tomato'
  | 'cucumber';
