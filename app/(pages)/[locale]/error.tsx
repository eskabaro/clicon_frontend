'use client'

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div>
            {error.message}
            <button onClick={reset}>reset</button>
        </div>
    )
}
