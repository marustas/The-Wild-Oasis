import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import ButtonIcon from "../ui/ButtonIcon";
import Logout from "../features/authentication/Logout";
import DarkmodeToggle from "../ui/DarkmodeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
      <li>
        <DarkmodeToggle />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
