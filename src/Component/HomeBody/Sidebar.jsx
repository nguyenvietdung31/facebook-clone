import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import SidebarRow from './SidebarRow.jsx';

function Sidebar({ user}) {

    // const url = '/' + user.displayName + '/' + user.uid;
  return (
    <div className='sidebar'>
        <Link to={`${user?.displayName}/${user?.uid}`}>
            <SidebarRow avatar ImageLink={user?.photoURL} title={user?.displayName}/>
        </Link>
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" title="Find Friends" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" title="Memories" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" title="Groups" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" title="Marketplace" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" title="Watch" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png" title="Play games"/>
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" title="Saved" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" title="Events" />
        
        
        <SidebarRow dropdown ImageLink="null" title="See more" />

        <div className='hr'/>
        <div className='shortcut'>
            <h4>Shortcut</h4>
        </div>
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" title="Recently" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png" title="Messenger" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/BNA7dRpTdeH.png" title="LiveStreaming"/>
        <div className='policy'>
        <p>Privacy</p>
            <p className="dot">·</p>
            <p>Terms</p>
            <p className="dot">·</p>
            <p>Advertising</p>
            <p className="dot">·</p>
            <p>Ad choices</p>
            <p className="dot">·</p>
            <p>Cookies</p>
            <p className="dot">·</p>
            <p>More</p>
            <p className="dot">·</p>
            <p>Facebook © 2020</p>
        </div>

    </div>
  )
}

export default Sidebar