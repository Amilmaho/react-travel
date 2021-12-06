import React from "react";
import { useParams } from "react-router-dom"

interface MatchParams  {
  touristRouteId: string;
}

export const DetailPage: React.FC<MatchParams> = () => {
  const param = useParams()
  console.log(param);
  
    return (
      <h1>旅游路线详情页面:{param.touristRouteId}</h1>
    );
}
