import axios from ".";
import { RegisterRoomState } from "../../types/room";

export const registerRoomAPI = (body: RegisterRoomState & { hostId: number }) =>
    axios.post("/api/rooms", body);
