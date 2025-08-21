interface GetEnumsReq {
  data: Enums;
  status: number;
  statusText:string;

}

interface AddFarmsDetailsReq {
  data:{ 
      data : {
      crop: string ;
      farm_configuration: Coords[];
      irrigation_source: string;
      latitude: string;
      location: string;
      longitude: string;
      name: string;
      seed_variety: string;
      size: string;
      soil_type: string;
      sowing_date: string;
      sowing_method: string;
      user_id: number;
    },
    message: string;
    success: boolean;
  }
    status: number;
    statusText:string
}

interface GetFarmListReq {
  data:{ 
    data: Farm[];
    message: string;
    success: boolean;
  }
    status: number;
    statusText:string
}

interface GetFarmStatsReq {
    data: FarmStats;
    status: number;
    statusText:string;
}