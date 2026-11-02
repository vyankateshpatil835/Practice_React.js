import './App.css'
import Card from './components/card.jsx'


const jobs = [
    {
      "companyName": "Google",
      "logo": "https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
      "datePosted": "5 days ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$99,840",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Amazon",
      "logo": "https://imgs.search.brave.com/iuJZo33qmZRr8eXOWg1gQvG33lNeiiUVx_YHAIHACmo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/bG9nby1zbWlsZS1p/Y29uLXZlY3Rvci0z/NDI0Mzk4Ny5qcGc",
      "datePosted": "1 week ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$87,360",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Apple",
      "logo": "https://imgs.search.brave.com/vtY7aYLgnKRebvxQl_AATZJTxpLAEUrhnKU74RhQsrM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NzY2LzE5MS9zbWFs/bC9hcHBsZS1sb2dv/LWFwcGxlLWljb24t/dHJhbnNwYXJlbnQt/ZnJlZS1wbmcucG5n",
      "datePosted": "5 days ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$95,680",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Meta",
      "logo": "https://imgs.search.brave.com/jkHweIx5ktBQNogZZGQtjdU4fMxDBLcYfHxs24Gnuhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkzLzI2/LzVmLzkzMjY1ZjAw/Y2NiMjQxNWZmMDk5/OTNjMzFkZWM4MWUx/LmpwZw",
      "datePosted": "1 week ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$108,160",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Netflix",
      "logo": "https://imgs.search.brave.com/lPlgd2xkgzqxivxTcOUN9Ph6xjIGD0TbPBr5GMMe4lw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
      "datePosted": "5 days ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$114,400",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Microsoft",
      "logo": "https://imgs.search.brave.com/urbdhQtWWYMqIz-xaeeL5tWbucWrpPsbuFwD0xEJmLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLXNtYWxsLTI5/LnBuZw",
      "datePosted": "1 week ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$91,520",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "NVIDIA",
      "logo": "https://imgs.search.brave.com/jQphPnUBs5q_XJJ6XwDg9K5LiVvrUV-XnqPC5RgIahE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MzMzMTgyNjcvZmls/ZS9vcmlnaW5hbC0z/OTMyOWQyNTFjYzgz/ZjdlYTc1Zjc3Zjk5/MTg0Mzc0ZC5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
      "datePosted": "5 days ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$104,000",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Adobe",
      "logo": "https://imgs.search.brave.com/xOETYmKLzaxa7vhWpWYXoqWGUynBSyK0cjuU3aQguUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNC8x/MC9hZG9iZS1sb2dv/LTIwMTctMzAweDMw/MC5wbmc",
      "datePosted": "1 week ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$85,280",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Salesforce",
      "logo": "https://imgs.search.brave.com/Hwic-rQ7t3GUJyU71jRVksFi1MZwpLHY5PX55QBercA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bG9nby5kZXYvc2Fs/ZXNmb3JjZS5jb20_/dG9rZW49bGl2ZV82/YTFhMjhmZC02NDIw/LTQ0OTItYWViMC1i/Mjk3NDYxZDlkZTIm/c2l6ZT0xMjgmcmV0/aW5hPXRydWUmZm9y/bWF0PXBuZw",
      "datePosted": "5 days ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$89,440",
      "location": "San Francisco, CA"
    },
    {
      "companyName": "Uber",
      "logo": "https://imgs.search.brave.com/pTgj08asbbPZa7mluuj8W9DLU05lUE-Sbclbtqqwxdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI5LzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0yOTk2MzAu/cG5n",
      "datePosted": "1 week ago",
      "post": "Frontend Developer",
      "tags": ["Part Time", "Junior Developer"],
      "pay": "$93,600",
      "location": "San Francisco, CA"
    }
  ]

function App() {
  return <div className="parent">
    {jobs.map((job, index) => (
      <Card key={index} {...job} />
    ))}
  </div>
}

export default App
