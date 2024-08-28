import styled from 'styled-components';

function IdolCard({ item, rank }) {
    return (
        <IdolCardBox>
            <IdolCardProfile>
                <IdolCardProfileImg>
                    <img src={item.profilePicture} alt="프로필이미지" />
                </IdolCardProfileImg>
                <IdolCardRank> {rank} </IdolCardRank>
                <IdolCardName> {item.name} </IdolCardName>
            </IdolCardProfile>
            <IdolCardVotes>{item.totalVotes.toLocaleString()} 표</IdolCardVotes>
        </IdolCardBox>
    );
}

export default IdolCard;

const IdolCardBox = styled.div`
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const IdolCardProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 10px 0;
`;
const IdolCardProfileImg = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid #f96d69;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;
const IdolCardRank = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #f96d69;
`;
const IdolCardName = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.87);
`;
const IdolCardVotes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
`;
