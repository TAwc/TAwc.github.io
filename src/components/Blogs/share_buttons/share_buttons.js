import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton} from "react-share";
import { EmailIcon, FacebookIcon, LinkedinIcon, RedditIcon, TwitterIcon,} from "react-share";

const ShareButtons = ([title, summary, website_name, email_body, facebook_quote, hashtag,]) => {
    /* https://www.npmjs.com/package/react-share */

    return(
        <>
         
        <EmailShareButton 
            url={share_URL}
            subject={title}
            body={email_body}>
            <EmailIcon size={32} round/>
        </EmailShareButton>

        <FacebookShareButton 
            quote={facebook_quote}
            hashtag >
            <FacebookIcon size={32} round/>
        </FacebookShareButton>

      </>
    )
}

export default ShareButtons;