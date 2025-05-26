export interface KeyMetrics {
    totalUsers: number;
    activeUsers: number;
    totalStreams: number;
    revenue: number;
    topArtist: {
      name: string;
      streams: number;
      image: string;
    };
    growthRate: {
      users: number;
      streams: number;
      revenue: number;
    };
    subscriptionTier: {
      free: number;
      premium: number;
      family: number;
    };
  }
  
  export interface UserGrowthData {
    month: string;
    totalUsers: number;
    activeUsers: number;
  }
  
  export interface RevenueSource {
    source: string;
    value: number;
    percentage: number;
  }
  
  export interface TopSong {
    name: string;
    artist: string;
    streams: number;
    color: string;
  }
  
  export interface GenreDistribution {
    genre: string;
    streams: number;
    percentage: number;
  }
  
  export interface StreamsByTime {
    hour: string;
    streams: number;
  }
  
  export interface VisualizationData {
    userGrowth: UserGrowthData[];
    revenueDistribution: RevenueSource[];
    topSongs: TopSong[];
    genreDistribution: GenreDistribution[];
    streamsByTime: StreamsByTime[];
  }
  
  export interface StreamData {
    id: number;
    songName: string;
    artist: string;
    dateStreamed: string;
    streamCount: number;
    userId: string;
    duration: number;
    location: string;
  }
  
  export interface TableData {
    recentStreams: StreamData[];
  }