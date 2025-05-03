import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  // Array of available stories
  const storyLibrary = [
    {
      id: "tortoise-hare",
      title: "The Tortoise and the Hare",
      description: "Learn how slow and steady wins the race in this classic tale of patience and perseverance.",
      difficulty: "Easy",
      color: "blue"
    },
    {
      id: "lion-mouse",
      title: "The Lion and the Mouse",
      description: "Discover how a tiny mouse proves that even the smallest friend can be a great ally.",
      difficulty: "Easy",
      color: "yellow"
    },
    {
      id: "boy-wolf",
      title: "The Boy Who Cried Wolf",
      description: "Find out what happens when nobody believes a shepherd boy who tells lies.",
      difficulty: "Medium",
      color: "red"
    },
    {
      id: "ant-grasshopper",
      title: "The Ant and the Grasshopper",
      description: "See why it's important to work hard and prepare for the future.",
      difficulty: "Medium",
      color: "green"
    },
    {
      id: "crow-pitcher",
      title: "The Crow and the Pitcher",
      description: "Learn how clever thinking solves problems in this story about a thirsty crow.",
      difficulty: "Hard",
      color: "purple"
    }
  ];

  return (
    <>
      <Head>
        <title>Aesop's Fables Visualization Library</title>
        <meta name="description" content="A collection of interactive visualization games based on Aesop's Fables" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-3 text-blue-800">Aesop's Fables</h1>
          <p className="text-center text-blue-600 mb-10">Choose a story and test your imagination skills!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {storyLibrary.map((story) => (
              <Link 
                href={`/stories/${story.id}`} 
                key={story.id}
                className={`block bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg border-t-4 border-${story.color}-500`}
              >
                <div className="p-6">
                  <h2 className={`text-2xl font-bold mb-2 text-${story.color}-700`}>{story.title}</h2>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 bg-${story.color}-100 text-${story.color}-800 rounded-full text-sm font-medium`}>
                      {story.difficulty}
                    </span>
                    <span className="text-blue-600 font-medium flex items-center">
                      Play Story
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">How to Play</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">1.</span>
                <span>Read each segment of the story carefully</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">2.</span>
                <span>Visualize what's happening in your imagination</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">3.</span>
                <span>Answer questions about details that weren't directly stated</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">4.</span>
                <span>Collect colorful gems for each correct answer</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">5.</span>
                <span>Complete the story to see the moral and your gem collection</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}