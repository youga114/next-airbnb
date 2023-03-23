import styled from "styled-components";
import { useSelector } from "../../../store";
import RegisterRoomBedTypes from "./RegisterRoomBedTypes";
import RegisterRoomPublicBedTypes from "./RegisterRoomPublicBedTypes";

const Container = styled.div`
    .register-room-bed-type-list {
        width: 548px;
    }
`;

const RegisterRoomBedList = () => {
    const bedList = useSelector((state) => state.registerRoom.bedList);

    return (
        <Container>
            <ul className="register-room-bed-type-list">
                {bedList.map((bedroom) => (
                    <RegisterRoomBedTypes key={bedroom.id} bedroom={bedroom} />
                ))}
                <RegisterRoomPublicBedTypes />
            </ul>
        </Container>
    );
};

export default RegisterRoomBedList;
