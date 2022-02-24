import React from "react";

function ChooseImg() {
    const [avatar, setAvatar] = React.useState();

    React.useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        };
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e;
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }

    return (
        <div>
            <input 
                type={'file'}
                onChange={(e) => handlePreviewAvatar(e.target.files[0])}
            />
            {
                avatar &&
                <img src={avatar.preview} alt='loading...' width='50%' height={'50%'} />
            }
        </div>
    );
}

export default ChooseImg;