interface GetProjectsRes {
    data: {
      available_projects: {
        data: Project[];
        page: number;
        pageSize: number;
        total: number;
      };
      completed_projects: {
        data: Project[];
        page: number;
        pageSize: number;
        total: number;
      };
      funded_project: {
        data: Project[];
        page: number;
        pageSize: number;
        total: number;
      };
    };
    status: number;
  }
  
  interface GetRewardsRes {
    data: Rewards;
    status: number;
    statusText: string;
  }
  