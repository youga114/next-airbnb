import axios from ".";
import { RegisterRoomState } from "../../types/room";
import { RoomType } from "../../types/room";
import { makeQueryString } from "../utils";

export const registerRoomAPI = (body: RegisterRoomState & { hostId: number }) =>
    axios.post("/api/rooms", body);

type GetRoomListAPIQueries = {
    location?: string | string[];
    checkInDate?: string | string[];
    checkOutDate?: string | string[];
    adultCount?: string | string[];
    childrenCount?: string | string[];
    infantsCount?: string | string[];
    latitude?: string | string[];
    longitude?: string | string[];
    limit: string | string[];
    page: string | string[];
};

export const getRoomListAPI = (queries: GetRoomListAPIQueries) => {
    return axios.get<RoomType[]>(makeQueryString("/api/rooms", queries));
};

export const getRoomAPI = (roomId: number) =>
    axios.get<RoomType>(`/api/rooms/${roomId}`);
