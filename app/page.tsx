"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import Toggle from "../components/Toggle";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState<String>("");
  const [isGPT, setIsGPT] = useState(false);
  const [wordCount, setWordCount] = useState<number>(200);
  const bioRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const description = getVibeDescription(vibe, isGPT);
    const updatedPrompt = `This application will take a visitor's job experience and profile, and produce an About section. Generate a max of ${wordCount} words for this new About content. ${description}`;
    console.log("Updated Prompt:", updatedPrompt);
  }, [vibe, isGPT, wordCount]);  // This effect runs whenever vibe, isGPT, or wordCount changes

  
  function getVibeDescription(vibe: VibeType, isGPT: boolean) {
    let description = "";
    switch (vibe) {
      case "Casual":
        description = " relaxed and casual tone.";
        break;
      case "Funny":
        description = " funny and silly, smart humor tone. Include a joke based on user's experience.";
        break;
      case "Professional":
        description = " professional and business tone.";
        break;
      default:
        description = " has a unique style."; // Just in case another case is added later
    }
  
    if (isGPT) {
      description += " Also, YOU MUSH WRITE HALF of the contet as if a Pirate was speakinrg, basicailly like everyone does on International Talk Like a Pirate Day.";
    }
  
    return description;
  }
  
  
  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prompt = `This application will take a visitor's job experience and profile, most likely from a resume or linkedIN, and produce an About section that the visitor may replace on their LinkedIN profile About Section. Generate a max of ${wordCount} words for this new About content. Generate a strong About section reflecting the visitor's depth and experience.  Use the following guidance for making a useful LinkedIN About section. This guidance was created by a recruiter and written in a way that the author is teaching the reader. How To Write A Compelling LinkedIn Summary To Improve Visibility
1) Make sure your start hooks the reader

Those who visit your profile can only see the first three lines of your summary. Only when they click on 'See more' can they continue reading the rest.

It is important that your headline catches someone's attention and makes them want to learn more about you. 

One way to do this is to start with a strong opening line. This could be your best skill, something that sets you apart, or something you're most proud of. Take a moment to consider what makes you unique, interesting, or interesting enough to make someone want to find out more about you on LinkedIn.

Another approach is to introduce yourself with something you want your readers to know about you. 

Whichever you choose to start your summary, make sure your first three lines are strong and will keep the reader engaged.

2) Tell your story

Your LinkedIn summary should tell your story.
Your professional profile should be succinct and convey the most important facts about you. It should be able to stand alone as a stand-alone sentence, but not at the expense of being compelling and informative.

Focus on the narrative of the summary rather than making it a point-wise description of your work as you would in a resume. It should share your professional journey/skills with the reader to grab their attention.

3) Optimize it to include relevant keywords

As a job seeker, you know that one of the most important things you can do is to optimize your LinkedIn profile. This means ensuring your summary includes relevant keywords to help recruiters find you.

Identify the keywords most relevant to your experience and skills - then sprinkle them throughout your summary, making sure you mention them concerning your work history and achievements.

But what exactly are the best keywords to use in your LinkedIn summary?

Here are a few tips:

1. Use keywords that are relevant to your industry and profession.

2. Use keywords that are specific to your skills and experience.

3. Use keywords that are commonly used in job descriptions.

4. Use keywords likely to be used by recruiters when searching for candidates.

Including these keywords in your LinkedIn summary will help ensure that your profile comes up in search results, making employers more likely to find and contact you.

4) Keep it concise

It is important to keep your summary concise. LinkedIn is often used by recruiters and hiring managers to screen candidates; a long, drawn-out summary can put them off.

Your summary should be a concise snapshot of your professional history and successes. Don't try to cram too much information into this section – you can always provide more details in other areas of your profile.

Your summary is usually read in seconds, so grab the reader's attention from the start. Use strong language to sell yourself, and highlight your most relevant skills and experience. Remember, your summary is your elevator pitch – so make it count!

By keeping your summary concise, you can make a great first impression on those who view your profile.

5) Include numbers and data

If you want your LinkedIn profile to stand out, include numbers and data in your summary.

Numbers and data are especially important in data-driven fields such as marketing or finance. But even if you're not, employers will be impressed by your ability to use data to support your professional claims.

You could say, for example, that you increased sales by 25 percent in your first year and by 50 percent in your second year at your previous job instead of simply saying you increased sales. The more concrete the data, the more likely you will catch someone's attention.
Hence, if you want to leave a lasting impression on LinkedIn, include some concrete numbers. It'll make all the difference!

6) Include a clear CTA

It is your LinkedIn summary where you get the opportunity to make an excellent first impression and convince people that you are someone worth connecting with.

Make sure you end your summary with a solid call to action. This could be like "Connect with me if you're interested in discussing XYZ" or "Feel free to reach out if you need help with XYZ."

A clear call to action will make it easy for people to know how to get in touch with you and show that you're proactive and interested in connecting with others.

Mistakes to avoid when writing your LinkedIn summary
Now that you know what you SHOULD focus on when crafting your LinkedIn summary, here are a few mistakes to avoid!

1) Don't mention information you already have on your resume

Your resume is a more formal document that outlines your work experience, educational background, and skills. A LinkedIn summary provides a snapshot of you and your career to potential employers and connections.

While you want to include some of the same information that you would like on your resume, you also want to take the opportunity to showcase your personality and give a more detailed account of your professional journey. Take advantage of your LinkedIn summary to share your story and connect with others.

2) Don't makeup things up

Most people make sure their LinkedIn profile is as impressive as possible. Presenting themselves in the best light and showcasing their skills and experiences is important to them. However, there is a line between putting your best foot forward and lying. And unfortunately, many people cross that line when writing their LinkedIn summary.

When writing your LinkedIn summary, it is essential to be honest. Don't exaggerate your skills or experience, and don't makeup information. Not only is it dishonest, but it can also come back to bite you. A LinkedIn profile containing false information will negatively affect your professional reputation and do you no favors.

So, when you're writing your LinkedIn summary, keep it honest. Highlight your skills and experience, but don't exaggerate. It's the best way to present yourself in a positive light without crossing the line into dishonesty.

3) Don't focus too much on your roles and responsibilities, but rather on accomplishments

When writing your LinkedIn summary, it's important to focus on your accomplishments and not simply your tasks and responsibilities. This will set you apart from other candidates and help you land the job you want.

Sure, your potential employer wants to know what you're capable of, but they're also interested in what you've accomplished in your previous roles. So, take the time to write about your successes, and don't be afraid to toot your own horn a bit. This is your chance to shine!

And, if you're unsure where to start, simply look at your previous job descriptions and see what you can highlight from your time in those positions. Chances are, you have more accomplishments than you realize. So, go ahead and start writing them down – you'll be glad you did when you land your dream job.

How Does An Optimized LinkedIn Summary Affect Your Search Ranking?
An optimized LinkedIn summary can definitely affect your search ranking, especially if you are active on the platform. If you have a well-written, keyword-rich summary, it is more likely that you will show up higher in search results.

Most hiring professionals use LinkedIn Recruiter to shortlist candidates for open roles. LinkedIn Recruiter allows them to search for candidates on LinkedIn using keyword search, Boolean search, and 20+ advanced search filters. LinkedIn Recruiter also allows them to get smart recommendations based on their previous search. As a job seeker, if you have an optimized summary with relevant keywords for the new role you are targeting, your profile will show up on a recruiter's search, increasing your chances of getting interview calls from top companies without even applying to them.

Of course, having an optimized summary is just one part of the equation – you also need to have a strong profile overall and be active on the site. But an optimized summary is a good start if you want to ensure you are doing everything possible to improve your search ranking.

LinkedIn Summary Examples For Job Seekers
You've read quite a bit about how to write a compelling LinkedIn summary in this blog. But let us look at some good and bad LinkedIn summaries to understand what we just discussed with examples.

Here's an example of a poor LinkedIn summary:

A leader with a proven track record of high accomplishments in several areas and the ability to drive change. I am highly organized, support empowerment and teamwork, highly adaptable, have strong business sense, am a good communicator, results-oriented, and optimistic.

I have worked as a Software Engineer at a company in India and am looking for new job opportunities.

Let us discuss everything that is wrong in this summary.

1) The summary lacks facts and figures. The candidate does not have any metrics to highlight the impact of their work.

2) They only talk about their qualities and not accomplishments. The summary is subjective and does not highlight any points that make the candidate a potential employee.

3) The summary does not highlight any skills or information about what work they've done. The recruiters don't know whether they'll be a good fit for their open positions, and they would not contact them immediately.

4) It is not optimized and does not have relevant keywords. It is less likely that recruiters would use keywords like "highly organized," "optimistic," or "teamwork" to look for Software Engineering candidates. This means their profile wouldn't appear in the search results, leading to a missed opportunity.

What would a good LinkedIn summary look like, then? Read ahead.

I am currently a Software Engineer at XYZ company with 5+ years of experience managing teams of 50-100 members. Responsible for managing more than 30 projects with budgets ranging from $100K to $1.7M.

Before joining XYZ company, I have -

Founded two startups currently valuing XYZ
Worked as a Machine Learning Engineer at ABC company

I have also worked on projects utilizing IBM Lotus Notes Domino, IBM WebSphere, and Microsoft .NET technologies. Please get in touch with me for any new opportunities.

What makes this summary good?

1) The candidate has backed every skill with facts and figures to highlight what their accomplishment was.

2) The candidate has covered information about their present and past work experience in just a few lines.

3) The summary includes their areas of expertise and skills so if a recruiter looks up candidates with these skills on LinkedIn, their profile would rank higher in the search results.

Not sure where to get started? Use these two sample templates to start crafting your LinkedIn summary. Do not use it as it is, make any necessary changes to optimize it for your target roles.

# Student

As a computer science student, I have a strong foundation in programming, software development, and computer science theory. I am experienced in Java, Python, and C++ and have developed several web and mobile applications. 

My experience includes web-based, multi-threaded applications and front-end development with the latest web technologies. I have also worked on projects utilizing IBM Lotus Notes Domino, IBM WebSphere, and Microsoft .NET technologies.

I am always looking to learn new technologies and am currently exploring data science and machine learning. Currently seeking full-time Software Engineer opportunities.

Please feel free to contact me on LinkedIn for any new opportunities.

# Experienced Professional

I'm an experienced software engineer with over six years of experience and a reputation for building high-quality, scalable systems.

I've worked as a software developer for companies like Amazon and Facebook. I'm skilled in building complex and robust applications that can handle large amounts of traffic from multiple web servers and database servers. I love working on challenging and rewarding projects, but also measurable by the number of users or views the application has.

Reach out to me for any business opportunities on LinkedIn.

Conclusion

LinkedIn summaries are an excellent way to introduce yourself and your skills to potential employers or customers. A well-written summary can help you stand out from other applicants by including relevant information and proofreading it.
Take this Linkedin profile context, write an About section that recruiters would find compelling, taking in consideration the job experience that the attachment has for the person. Make sure the last sentence is CTA to reach out if interested to speak.
Whatever the guidance you've been given has been, be sure that whatever copy you produce the tone of the copy needs to be ${getVibeDescription(vibe, isGPT)}.

Don't inluude any phone numbers, hashtags or websites. Add paragraph breaks will it feels natural. The following content is the copy that the user added to this application provided from various sources, this is baseline you'll use to build upon: ${bio}${
    bio.slice(-1) === "." ? "" : "."
  }`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    console.log("Generated Prompt:", prompt);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error ${response.status}: ${errorData.error}`);
      }
  
      const data = await response.json();
      setGeneratedBios(data.choices[0].message.content);
    } catch (error) {
      console.error('Failed to fetch bio:', error);
      toast.error("Failed to generate bio. Please try again.");
    } finally {
      setLoading(false);
      scrollToBios();
    }
  };

  

  
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Generate your next LinkedIn About section in seconds
        </h1>
        <div className="mt-7">
          <Toggle isGPT={isGPT} setIsGPT={setIsGPT} />
        </div>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="Enter your job or hobby"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Paste your LinkedIn Profile <a href="/linkedin-profile-pdf.png" target="_blank"><u>PDF</u></a>, Resume, etc{" "}
              <span className="text-slate-500"></span>
            </p>
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            maxLength={5000}  // Limiting user input to 500 characters
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={"e.g., Resume Copy, LinkedIn Profile, Job Experience"}
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="Select your vibe" />
            <p className="text-left font-medium">Select your vibe</p>
          </div>
          <DropDown vibe={vibe} setVibe={setVibe} />

          <div className="flex mb-5 items-center space-x-3" style={{ marginTop: 25 + 'px' }}>
          <Image src="/3-black.png" width={30} height={30} alt="Select word count" />
          <p className="text-left font-medium">Select word count</p>
          </div>
          <div className="flex justify-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="wordCount"
                value="100"
                checked={wordCount === 100}
                onChange={(e) => setWordCount(Number(e.target.value))}
              />
              <span className="ml-2">100 words</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="wordCount"
                value="200"
                checked={wordCount === 200}
                onChange={(e) => setWordCount(Number(e.target.value))}
              />
              <span className="ml-2">200 words</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="wordCount"
                value="300"
                checked={wordCount === 300}
                onChange={(e) => setWordCount(Number(e.target.value))}
              />
              <span className="ml-2">300 words</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="wordCount"
                value="500"
                checked={wordCount === 500}
                onChange={(e) => setWordCount(Number(e.target.value))}
              />
              <span className="ml-2">500 words</span>
            </label>
          </div>


          {loading ? (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          ) : (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={generateBio}
            >
              Generate &rarr;
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {generatedBios && (
            <>
              <h2
                className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                ref={bioRef}
              >
                Your generated LinkedIn About section
              </h2>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                {generatedBios
                  .split(/\s*2\.\s*|\s*3\.\s*/)
                  .map((generatedBio, index) => (
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-pointer border"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedBio);
                        toast.success("Bio copied to clipboard");
                      }}
                      key={index}
                    >
                      <p className="text-left">{generatedBio}</p>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
