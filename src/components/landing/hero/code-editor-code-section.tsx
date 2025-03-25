export default function CodeEditorCodeSection() {
  return (
    <div className="col-span-7 bg-zinc-900 overflow-hidden">
      <div className="h-full p-6 text-white text-sm font-mono flex flex-col">
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">1</span>
          <span className="text-purple-400">import</span>
          <span className="text-white ml-2">React</span>
          <span className="text-purple-400 ml-2">from</span>
          <span className="text-green-400 ml-2">'react'</span>
          <span className="text-white">;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">2</span>
          <span className="text-white"></span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">3</span>
          <span className="text-purple-400">class</span>
          <span className="text-yellow-400 ml-2">EmergingCoders</span>
          <span className="text-purple-400 ml-2">extends</span>
          <span className="text-yellow-400 ml-2">React.Component</span>
          <span className="text-white ml-2">&#123;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">4</span>
          <span className="ml-4 text-purple-400">constructor</span>
          <span className="text-white">(props)</span>
          <span className="text-white ml-2">&#123;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">5</span>
          <span className="ml-8 text-purple-400">super</span>
          <span className="text-white">(props);</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">6</span>
          <span className="ml-8 text-purple-400">this</span>
          <span className="text-white">.state = &#123;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">7</span>
          <span className="ml-12 text-white">community: </span>
          <span className="text-green-400">
            'FGLI Students at Northwestern'
          </span>
          <span className="text-white">,</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">8</span>
          <span className="ml-12 text-white">mission: </span>
          <span className="text-green-400">
            'Empower and develop technical skills and career readiness'
          </span>
          <span className="text-white">,</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">9</span>
          <span className="ml-12 text-white">activities: [</span>
          <span className="text-green-400">'coding projects'</span>
          <span className="text-white">, </span>
          <span className="text-green-400">'networking'</span>
          <span className="text-white">, </span>
          <span className="text-green-400">'mentorship'</span>
          <span className="text-white">],</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">1</span>
          <span className="ml-12 text-white">students: 400,</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">1</span>
          <span className="ml-12 text-white">isOpenToAll: </span>
          <span className="text-blue-400">true</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">12</span>
          <span className="ml-8 text-white">&#125;;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">13</span>
          <span className="ml-4 text-white">&#125;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">14</span>
          <span className="text-white"></span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">15</span>
          <span className="ml-4 text-purple-400">joinCommunity</span>
          <span className="text-white">(student)</span>
          <span className="text-white ml-2">&#123;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">16</span>
          <span className="ml-8 text-purple-400">this</span>
          <span className="text-white">.setState(&#123;</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">17</span>
          <span className="ml-12 text-white">students: [...</span>
          <span className="text-purple-400">this</span>
          <span className="text-white">.state.students, student]</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">18</span>
          <span className="ml-8 text-white">&#125;);</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">19</span>
          <span className="ml-8 text-blue-400">console</span>
          <span className="text-white">.log(</span>
          <span className="text-green-400">
            {"`Welcome ${student} to Emerging Coders!`"}
          </span>
          <span className="text-white">);</span>
        </div>
        <div className="flex mb-1">
          <span className="text-zinc-600 mr-4 select-none">20</span>
          <span className="ml-4 text-white">&#125;</span>
        </div>
      </div>
    </div>
  );
}
