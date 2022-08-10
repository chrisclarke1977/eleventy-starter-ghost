import React from "react";

function urlSrc(id) {
    return `https://www.youtube.com/watch?v=${id}`;
}

function imgSrc(id) {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

const posts = [
    {
        id: "6FY3qRd4ihs",
        tags: "CRINGE",
        title:
            "CRINGE for 9.17 minutes * Outtakes from My FIRST Video * | Wig Review | Let's Cringe Together",
        description:
            "CRINGE for 9.17 minutes * Outtakes from My FIRST Video * | Wig Review | Let's Cringe Together",
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "9 minutes 17 seconds"
    },
    {
        id: "Vt58LPPs680",
        tags: "Kawaii Corner | Wig Reviews",
        title: " Me Crushing on Webster Wigs for 20 minutes straight",
        description:
            "Me Crushing on Webster Wigs for 20 minutes straight | Kawaii Corner | Wig Reviews",
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds"
    },
    {
        id: "MfFq3d1Llxk",
        tags: `This is not "Tea"`,
        title: `The Gabbie "Show" is a Farce, not an excuse | This is not "Tea"`,
        description: "",
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "1 hour 23 minutes 13 seconds"
    },
    {
        tags: `This is not "TEA"`,
        title: ` YOUTUBE’S BIGGEST “VICTIM” Poor Katie Joy Paulson (WOACB) | This is Not TEA `,
        description: ` YOUTUBE’S BIGGEST “VICTIM” Poor Katie Joy Paulson (WOACB) | This is Not TEA `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=zUc2AuTBpUw",
        id: "zUc2AuTBpUw"
    },
    {
        tags: "Debunking BPD | Makeup and Mental Health",
        title: ` You think you KNOW BPD? You DON'T: The 9 Traits | Debunking BPD | Makeup and Mental Health `,
        description: ` You think you KNOW BPD? You DON'T: The 9 Traits | Debunking BPD | Makeup and Mental Health `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=_YneRogUvnI",
        id: "_YneRogUvnI"
    },
    {
        tags: `This is not "TEA"`,
        title: ` "I'm the Victim because..." | This is Not TEA `,
        description: ` "I'm the Victim because..." | This is Not TEA `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=KzH1exJtNEE",
        id: "KzH1exJtNEE"
    },
    {
        tags: `This is not "TEA"`,
        title: ` Eugenia Cooney: DEMONISED for a DISEASE? Or a Genuine Threat? | This is not "Tea" `,
        description: ` Eugenia Cooney: DEMONISED for a DISEASE? Or a Genuine Threat? | This is not "Tea" `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=70ypQNdudto",
        id: "70ypQNdudto"
    },
    {
        tags: `This is not "TEA"`,
        title: ` THE BIGGEST HYPOCRITE ON YOUTUBE Katie Joy Paulson (Without A Crystal Ball) | This is not "TEA" `,
        description: ` THE BIGGEST HYPOCRITE ON YOUTUBE Katie Joy Paulson (Without A Crystal Ball) | This is not "TEA" `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=OICvsqRQVHA",
        id: "OICvsqRQVHA"
    },
    {
        tags: "Normalisation of Death Threats | Stereo Broadcast Podcast",
        title: ` Charli D'Amelio HATERS are going TOO FAR | Normalisation of Death Threats | Stereo Broadcast Podcast `,
        description: ` Charli D'Amelio HATERS are going TOO FAR | Normalisation of Death Threats | Stereo Broadcast Podcast `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=rt_kRnkTZ_U",
        id: "rt_kRnkTZ_U"
    },
    {
        tags: "Raid Your Closet Cosplay | Kawaii Corner",
        title: ` Princess Peach Cosplay | *Non- Spooky* Halloween Edition | Raid Your Closet Cosplay | Kawaii Corner `,
        description: ` Princess Peach Cosplay | *Non- Spooky* Halloween Edition | Raid Your Closet Cosplay | Kawaii Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=9saU8YE3tXs",
        id: "9saU8YE3tXs"
    },
    {
        tags: "",
        title: ` Kezandunicorns Reacts to ANTHONY PADILLA'S Borderline Personality Disorder Episode (BPD/EUPD/ERD) `,
        description: ` Kezandunicorns Reacts to ANTHONY PADILLA'S Borderline Personality Disorder Episode (BPD/EUPD/ERD) `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=HEudkgHSW1E",
        id: "HEudkgHSW1E"
    },
    {
        tags: "World Mental Health Day 2020",
        title: ` Borderline Personality Disorder: What it looks like V What it IS | World Mental Health Day 2020 `,
        description: ` Borderline Personality Disorder: What it looks like V What it IS | World Mental Health Day 2020 `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=dk9SMCo_rVc",
        id: "dk9SMCo_rVc"
    },
    {
        tags: "",
        title: ` No Makeup, No Wig, Just BPD (Borderline Personality Disorder) `,
        description: ` No Makeup, No Wig, Just BPD (Borderline Personality Disorder) `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=9EfOV636fC0",
        id: "9EfOV636fC0"
    },
    {
        tags: "",
        title: ` Trans Women ARE Women...| I joined a FACEBOOK Group who attacked my beliefs `,
        description: ` Trans Women ARE Women...| I joined a FACEBOOK Group who attacked my beliefs `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=DH3_myT_GVU",
        id: "DH3_myT_GVU"
    },
    {
        tags: "Live",
        title: ` LIVE: Anthony Padilla, we need to talk - A Borderline Personality's FEAR about his BPD episode `,
        description: ` LIVE: Anthony Padilla, we need to talk - A Borderline Personality's FEAR about his BPD episode `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=hPMkQUvBnM8",
        id: "hPMkQUvBnM8"
    },
    {
        tags: "Kawaii, Unicorn, Fairy, | Kawaii Corner",
        title: ` Pastel Rainbow Explosion Makeup Tutorial | Kawaii, Unicorn, Fairy, | Kawaii Corner `,
        description: ` Pastel Rainbow Explosion Makeup Tutorial | Kawaii, Unicorn, Fairy, | Kawaii Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=fqTSpIqrNNo",
        id: "fqTSpIqrNNo"
    },
    {
        tags: "FASHERN Review | Kawaii Corner",
        title: ` The ONE ITEM CHALLENGE with a ROMPER: Styling NEON with PASTELS! | FASHERN Review | Kawaii Corner `,
        description: ` The ONE ITEM CHALLENGE with a ROMPER: Styling NEON with PASTELS! | FASHERN Review | Kawaii Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=tlV0HYw7dTY",
        id: "tlV0HYw7dTY"
    },
    {
        tags: "Life in a Psych Ward | Nightmare Stories",
        title: ` TOP NHS *FAILS* | Mental Hospital Patient HORROR Stories | Life in a Psych Ward | Nightmare Stories `,
        description: ` TOP NHS *FAILS* | Mental Hospital Patient HORROR Stories | Life in a Psych Ward | Nightmare Stories `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=iE6Cyngrz5Q",
        id: "iE6Cyngrz5Q"
    },
    {
        tags: "Live",
        title: ` LIVE: Am I The A**hole? | The Latest stories from r/AITA | LiveStream `,
        description: ` LIVE: Am I The A**hole? | The Latest stories from r/AITA | LiveStream `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=L-Gy3iyvQqQ",
        id: "L-Gy3iyvQqQ"
    },
    {
        tags: "",
        title: ` Pw BPD are MONSTERS! Reacting to BPD TIKTOK: DEBUNKING BPD (Borderline Personality Disorder) `,
        description: ` Pw BPD are MONSTERS! Reacting to BPD TIKTOK: DEBUNKING BPD (Borderline Personality Disorder) `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=CeBKVN6oMJ0",
        id: "CeBKVN6oMJ0"
    },
    {
        tags: "",
        title: ` ANOREXIC Discusses: WEIGHING CHILDREN in SCHOOL could cause ANOREXIA: I should KNOW `,
        description: ` ANOREXIC Discusses: WEIGHING CHILDREN in SCHOOL could cause ANOREXIA: I should KNOW `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=5RG1VLLdq_Y",
        id: "5RG1VLLdq_Y"
    },
    {
        tags: "",
        title: ` It's the victim's RESPONSIBILITY to say NO says KEEMSTAR `,
        description: ` It's the victim's RESPONSIBILITY to say NO says KEEMSTAR `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=CRYUvTbzpFQ",
        id: "CRYUvTbzpFQ"
    },
    {
        tags: "Live",
        title: ` LIVE: Don't be ridiculous Chris `,
        description: ` LIVE: Don't be ridiculous Chris `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=eoOCk5P8V2k",
        id: "eoOCk5P8V2k"
    },
    {
        tags: "What REALLY Happens When you Report A Comment",
        title: ` Facebook Sent the POLICE to my House | What REALLY Happens When you Report A Comment `,
        description: ` Facebook Sent the POLICE to my House | What REALLY Happens When you Report A Comment `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=RJSxu10GDDE",
        id: "RJSxu10GDDE"
    },
    {
        tags: "This Ain't It Chief ",
        title: ` Shane Dawson, please just tell us Why. Why did you do this? | This Ain't It Chief `,
        description: ` Shane Dawson, please just tell us Why. Why did you do this? | This Ain't It Chief `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=jiUwpT6_cqg",
        id: "jiUwpT6_cqg"
    },
    {
        tags: "This is not Tea",
        title: ` Who's the real VILLAIN? They Pushed JAMES CHARLES to the Edge | This is not Tea `,
        description: ` Who's the real VILLAIN? They Pushed JAMES CHARLES to the Edge | This is not Tea `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=O8yK5x38jdo",
        id: "O8yK5x38jdo"
    },
    {
        tags: "5 AFFORDABLE KAWAII WIGS UNDER £30 | How Good Are They Really?",
        title: ` Let's Talk About LUSH WIGS | 5 AFFORDABLE KAWAII WIGS UNDER £30 | How Good Are They Really? `,
        description: ` Let's Talk About LUSH WIGS | 5 AFFORDABLE KAWAII WIGS UNDER £30 | How Good Are They Really? `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=RYwd3XmVkUU",
        id: "RYwd3XmVkUU"
    },
    {
        tags: "Caroline Flack Villain or Victim? | This is not TEA",
        title: ` We Need to Talk About Cancel Culture | Caroline Flack Villain or Victim? | This is not TEA `,
        description: ` We Need to Talk About Cancel Culture | Caroline Flack Villain or Victim? | This is not TEA `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=j3pOUdcJ9zE",
        id: "j3pOUdcJ9zE"
    },
    {
        tags: "Live",
        title: ` LIVE: What the hell are you talking about Kez?! `,
        description: ` LIVE: What the hell are you talking about Kez?! `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=EMDGTRlG3O8",
        id: "EMDGTRlG3O8"
    },
    {
        tags: "GRWM | LGBTQIA | Storytime",
        title: ` Let's Talk About What Pride was like 13 years ago in San Francisco | GRWM | LGBTQIA | Storytime `,
        description: ` Let's Talk About What Pride was like 13 years ago in San Francisco | GRWM | LGBTQIA | Storytime `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=5_HwrAUCbNg",
        id: "5_HwrAUCbNg"
    },
    {
        tags: "Live",
        title: ` LIVE: KEEMSTAR, You do NOT get to Victim Blame `,
        description: ` LIVE: KEEMSTAR, You do NOT get to Victim Blame `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=aZPWay7Q5uI",
        id: "aZPWay7Q5uI"
    },
    {
        tags: "Live",
        title: ` LIVE: Drinking Wine and Spilling Tea pt 2 `,
        description: ` LIVE: Drinking Wine and Spilling Tea pt 2 `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=FkQgshY9u_M",
        id: "FkQgshY9u_M"
    },
    {
        tags: "Live",
        title: ` LIVE: Drinking Wine and Spilling Tea Pt 1 `,
        description: ` LIVE: Drinking Wine and Spilling Tea Pt 1 `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=FKg-aIw_tlU",
        id: "FKg-aIw_tlU"
    },
    {
        tags: "This is not TEA",
        title: ` Gabbie Hanna's Mental Health is NOT "youtube TEA" | This is not TEA `,
        description: ` Gabbie Hanna's Mental Health is NOT "youtube TEA" | This is not TEA `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=LEJNnA0a4KM",
        id: "LEJNnA0a4KM"
    },
    {
        tags: "Live",
        title: ` LIVE: We need to talk about Gabbie Hanna before I lose my **** `,
        description: ` LIVE: We need to talk about Gabbie Hanna before I lose my **** `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=ukn3Xa-aJ7M",
        id: "ukn3Xa-aJ7M"
    },
    {
        tags: "GRWM | Unicorn Corner",
        title: ` Quarantine Mental Health and Makeup | GRWM | Unicorn Corner `,
        description: ` Quarantine Mental Health and Makeup | GRWM | Unicorn Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=sYdYAe8KkKk",
        id: "sYdYAe8KkKk"
    },
    {
        tags: "Dissociative Identity Disorder Meet My Alters | This is not TEA",
        title: ` What was TRISHA PAYTAS thinking?! | Dissociative Identity Disorder Meet My Alters | This is not TEA `,
        description: ` What was TRISHA PAYTAS thinking?! | Dissociative Identity Disorder Meet My Alters | This is not TEA `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=as0Hbdtg-RA",
        id: "as0Hbdtg-RA"
    },
    {
        tags: "BPD Episode Caught on Camera | RAW",
        title: ` I told a friend I had Borderline Personality Disorder and... | BPD Episode Caught on Camera | RAW `,
        description: ` I told a friend I had Borderline Personality Disorder and... | BPD Episode Caught on Camera | RAW `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=Ydf01-N3nW8",
        id: "Ydf01-N3nW8"
    },
    {
        tags: "Kawaii Corner",
        title: ` ROCKSTAR WIGS Unboxing, Haul and Reviewing My Collection | Kawaii Corner `,
        description: ` ROCKSTAR WIGS Unboxing, Haul and Reviewing My Collection | Kawaii Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=mM9mGlE_Gb0",
        id: "mM9mGlE_Gb0"
    },
    {
        tags: "Mental Health Story | Storytime | Unicorn Corner",
        title: ` It's Time to Talk about my Mental Health | Mental Health Story | Storytime | Unicorn Corner `,
        description: ` It's Time to Talk about my Mental Health | Mental Health Story | Storytime | Unicorn Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=wFILR98MgIs",
        id: "wFILR98MgIs"
    },
    {
        tags: "Kawaii Corner",
        title: ` GRMW Miss Santa Christmas Cosplay | Kawaii Corner `,
        description: ` GRMW Miss Santa Christmas Cosplay | Kawaii Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=F2foIicplxs",
        id: "F2foIicplxs"
    },
    {
        tags: "Unicorn and Flamingo Fizz | Pastel Wigs | Kawaii Corner",
        title: ` STAR STYLE WIGS Review | Unicorn and Flamingo Fizz | Pastel Wigs | Kawaii Corner `,
        description: ` STAR STYLE WIGS Review | Unicorn and Flamingo Fizz | Pastel Wigs | Kawaii Corner `,
        authorSrc: "/assets/author.jpg",
        author: "kezandunicorns",
        duration: "20 minutes 23 seconds",
        url: "https://www.youtube.com/watch?v=vjvTY4_hoQk",
        id: "vjvTY4_hoQk"
    }
];

const Post = ({
    id,
    tags,
    title,
    description,
    authorSrc,
    author,
    duration
}) => {
    return (
        <a className="post-card" href={urlSrc(id)}>
            <header className="post-card-header">
                <img
                    className="post-card-image lazyloaded"
                    src={imgSrc(id)}
                    alt={title}
                    data-src={imgSrc(id)}
                    width="1600"
                    height="1050"
                />
                <div className="post-card-tags">{tags}</div>
                <h2 className="post-card-title">{title}</h2>
            </header>
            <div className="post-card-excerpt">
                <p>{description}</p>
            </div>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                        <img
                            className="author-profile-image ls-is-cached lazyloaded"
                            src={authorSrc}
                            alt={author}
                            data-src={authorSrc}
                            width="400"
                            height="400"
                        />
                    </div>
                    <span>{author}</span>
                </div>
                <div className="post-card-footer-right">
                    <div>{duration}</div>
                </div>
            </footer>
        </a>
    );
};

const Posts = () => {
    return (
        <section className="post-feed">
            {posts.map(item => (
                <Post {...item} />
            ))}
        </section>
    );
};

export default Posts;
