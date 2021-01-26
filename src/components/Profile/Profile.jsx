import React from 'react'


function Profile(){
    return(
        <div className='content'>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg"/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    {/*Posts*/}
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;