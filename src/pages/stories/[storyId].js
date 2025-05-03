import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AesopGame from '../../components/AesopGame'
import storyData from '../../data/storyData'

export default function StoryPage() {
  const router = useRouter()
  const { storyId } = router.query
  const [story, setStory] = useState(null)

  useEffect(() => {
    if (storyId && storyData[storyId]) {
      setStory(storyData[storyId])
    }
  }, [storyId])

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-800">Loading story...</h1>
          {storyId && !storyData[storyId] && (
            <>
              <p className="text-red-500 mb-4">Story not found!</p>
              <Link 
                href="/"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Back to Library
              </Link>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{story.title} - Aesop's Fables Visualization Game</title>
        <meta name="description" content={`Test your visualization skills with ${story.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-between items-center">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-700 hover:text-blue-900"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Library
            </Link>
          </div>
          <AesopGame gameContent={story.content} title={story.title} />
        </div>
      </main>
    </>
  )
}