import {Request, Response} from 'express';

import {Status} from '../../utils/interfaces/Status';
import {Vehicle} from "../../utils/interfaces/Vehicle";

import {insertVehicle} from "../../utils/vehicle/insertVehicle"
import {selectVehicleByVehicleId} from "../../utils/vehicle/selectVehicleByVehicleId";
import {updateVehicle} from "../../utils/vehicle/updateVehicleByVehicleId";
import {deleteVehicle} from "../../utils/vehicle/deleteVehicleByVehicleId";

export async function postVehicle(request: Request, response: Response) : Promise<Response<Status>> {
  try {

    const { vehicleWomanId, vehicleColor, vehicleDescription, vehicleMake, vehicleModel, vehiclePlateNumber, vehicleYear } = request.body;
    //console.log(request.body)
    const vehicle: Vehicle = {
      vehicleId: null,
      vehicleWomanId,
      vehicleColor,
      vehicleDescription,
      vehicleMake,
      vehicleModel,
      vehiclePlateNumber,
      vehicleYear
    }
    const result = await insertVehicle(vehicle)
    const status: Status = {
      status: 200,
      message: result,
      data: null
    };
    return response.json(status);

  } catch(error:any) {
    console.error(error.message)
    return  response.json({
      status: 500,
      message: "Error Creating vehicle try again later.",
      data: null
    });
  }
}

export async function getVehicleByVehicleId(request : Request, response: Response): Promise<Response<Status>>{
  try {
    const     {vehicleId} = request.params
    const data  = await selectVehicleByVehicleId(vehicleId)
    return response.json({status:200, message: null, data});
  } catch(error) {
    return response.json({
      status: 500,
      message: "Error getting vehicle try again later.",
      data: []
    })
  }
}

export async function updateVehicleByVehicleId(request : Request, response: Response): Promise<Response<Status>>{
  try {
    const { vehicleWomanId, vehicleColor, vehicleDescription, vehicleMake, vehicleModel, vehiclePlateNumber, vehicleYear } = request.body;
    //console.log(request.body)
    const vehicle: Vehicle = {
      vehicleId: null,
      vehicleWomanId,
      vehicleColor,
      vehicleDescription,
      vehicleMake,
      vehicleModel,
      vehiclePlateNumber,
      vehicleYear
    }
    const data  = await updateVehicle(vehicle)
    return response.json({status:200, message: null, data});
  } catch(error) {
    return response.json({
      status: 500,
      message: "Error getting vehicle try again later.",
      data: []
    })
  }
}

export async function deleteVehicleByVehicleId(request : Request, response: Response): Promise<Response<Status>>{
  try {
    const     {vehicleId} = request.params
    const data  = await deleteVehicle(vehicleId)
    return response.json({status:200, message: null, data});
  } catch(error) {
    return response.json({
      status: 500,
      // @ts-ignore
      message: `Error getting vehicle try again later. ${error.toString()}`,
      data: []
    })
  }
}